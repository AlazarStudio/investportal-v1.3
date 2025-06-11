import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TopicIcon from "@mui/icons-material/Topic";
import simpleRestProvider from "ra-data-simple-rest";
import polyglotI18nProvider from "ra-i18n-polyglot";
import AppsIcon from '@mui/icons-material/Apps';
import russianMessages from "ra-language-russian";
import { Admin, Resource } from "react-admin";

import serverConfig from "../../../serverConfig";

import {
  DocGroupsCreate,
  DocGroupsEdit,
  DocGroupsList,
} from "./CRUD/DocGroupsCRUD";
import { DocsCreate, DocsEdit, DocsList } from "./CRUD/DocsCRUD";
import { NewsCreate, NewsEdit, NewsList } from "./CRUD/NewsCRUD";
import { ProjectCreate, ProjectEdit, ProjectList } from "./CRUD/ProjectsCRUD";
import authProvider from "./JS/authProvider";
import { fetchJsonWithToken } from "./JS/fetchJsonWithToken";
import LoginPage from "./LoginPage";
import { SMCreate, SMEdit, SMList } from "./CRUD/SMCRUD";

// Подключение к REST API
const dataProvider = simpleRestProvider(`${serverConfig}`, fetchJsonWithToken);

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

function AdminPage() {
  return (
    <Admin
      basename="/admin"
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={<LoginPage />}
      i18nProvider={i18nProvider}
    >
      <Resource
        icon={NewspaperIcon}
        name="news"
        options={{ label: "Новости" }}
        list={<NewsList />}
        edit={<NewsEdit />}
        create={<NewsCreate />}
      />

      <Resource
        icon={EventIcon}
        name="projects"
        options={{ label: "Проекты" }}
        list={<ProjectList />}
        edit={<ProjectEdit />}
        create={<ProjectCreate />}
      />

      <Resource
        icon={TopicIcon}
        name="docs"
        options={{ label: "Документы" }}
        list={<DocsList />}
        edit={<DocsEdit />}
        create={<DocsCreate />}
      />

      {/* <Resource
				icon={FolderCopyIcon}
				name='group'
				options={{ label: 'Группы документов' }}
				list={<DocGroupsList />}
				edit={<DocGroupsEdit />}
				create={<DocGroupsCreate />}
			/> */}

      <Resource
        icon={AppsIcon}
        name="support-measures"
        options={{ label: "Меры поддержки" }}
        list={<SMList />}
        edit={<SMEdit />}
        create={<SMCreate />}
      />
    </Admin>
  );
}

export default AdminPage;
