import React from "react";
import {
  Create,
  Datagrid,
  DateTimeInput,
  Edit,
  FunctionField,
  ImageField,
  ImageInput,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

import uploadsConfig from "../../../../uploadsConfig";
import RichTextInput from "../Auth/RichTextInput";
import { handleSave, handleSaveWithImages } from "../JS/fileUploadUtils";

const stripHTML = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const formatDate = (dateString) => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return new Date(dateString).toLocaleString("ru-RU", options);
};

export const NewsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="№" />
      <TextField
        source="title"
        label="Заголовок"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "normal",
        }}
      />

      <FunctionField
        label="Дата"
        render={(record) => formatDate(record.date)}
      />

      <FunctionField
        label="Текст"
        render={(record) => stripHTML(record.text)}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "pre-wrap",
        }}
      />
    </Datagrid>
  </List>
);

export const NewsEdit = (props) => (
  <Edit {...props} transform={handleSaveWithImages}>
    <SimpleForm>
      <TextInput disabled source="id" label="№" />
      <TextInput source="title" label="Заголовок" />
      <RichTextInput source="text" label="Текст" />
      <DateTimeInput
        source="date"
        label="Дата"
        parse={(value) =>
          value ? new Date(value).toISOString() : value === "" ? null : value
        }
      />

      <ImageInput
        source="imagesRaw"
        label="Добавить новые изображения"
        multiple
      >
        <ImageField source="src" title="title" />
      </ImageInput>

      {/* Поле для редактирования старых и добавления новых изображений */}
      <ImageInput
        source="images"
        label="Изображения"
        multiple
        accept="image/*"
        format={(value) =>
          value && value.length
            ? value.map((image) => ({
                src: image.includes("http")
                  ? image
                  : `${uploadsConfig}${image}`,
                title: image,
              }))
            : []
        }
        parse={(value) =>
          value.map((file) => {
            // Если это новый файл (имеет rawImage), вернем только его имя
            if (file.rawImage) {
              return file.rawImage;
            }
            // Если это старое изображение (имеет только src), извлекаем имя файла
            return file.src.replace(`${uploadsConfig}`, "");
          })
        }
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const NewsCreate = (props) => (
  <Create {...props} transform={handleSave}>
    <SimpleForm>
      <TextInput source="title" label="Заголовок" />
      <RichTextInput source="text" label="Текст" />
      <DateTimeInput
        source="date"
        label="Дата"
        parse={(value) =>
          value ? new Date(value).toISOString() : value === "" ? null : value
        }
      />
      <ImageInput source="images" label="Изображения" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
