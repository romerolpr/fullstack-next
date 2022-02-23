import { USER_SETTINGS_PER_PAGE_UPDATE } from "../";

const settingsUpdatePerPage = (per_page) => ({
  type: USER_SETTINGS_PER_PAGE_UPDATE,
  payload: per_page,
})

export { settingsUpdatePerPage }