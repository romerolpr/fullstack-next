import { LayoutStatic } from '../src/containers';

import { UserListAvatar, Rounded } from "../src/components";
import { useFetch } from '../src/services/fetch/useFetch';

const Home = () => {

  const { data: repo } = useFetch('/v1/users/');
  const pages = repo?.slice(0, 4)
 
  return (
    <LayoutStatic breadcrumbLabel="Página inicial">
        <Rounded label="Atualizações recentes" linkHref={'/clients'} linkLabel={"Ver todos os clientes"}>
            { pages?.map(user => (
                <UserListAvatar 
                name={user.name} 
                description={user.description}
                lastUpdate={user.last_update}
                color={user.backdrop_color == '' ? null : `#${user.backdrop_color}`}
                actions={false}
                />
            )) }
        </Rounded>
    </LayoutStatic>
  )
}

export default Home;