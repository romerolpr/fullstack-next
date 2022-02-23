import { LayoutStatic } from '../src/containers';

import { UserListAvatar, Rounded } from "../src/components";
import { useFetch } from '../src/services/fetch/useFetch';

const Home = () => {

  const { data: repo } = useFetch('/v1/users/'); //v1/users/last
 
  return (
    <LayoutStatic breadcrumbLabel="Página inicial">
        <Rounded label="Últimas atualizações de clientes">
            { repo?.map(user => (
                <UserListAvatar 
                name={user.name} 
                description={user.description}
                color={user.backdrop_color == '' ? null : `#${user.backdrop_color}`}
                actions={true}
                />
            )) }
        </Rounded>
    </LayoutStatic>
  )
}

export default Home;