import React from 'react';

import { NextLink, UserListAvatar } from '../src/components';

// import layout base app
import { LayoutStatic } from '../src/containers';

const Home = () => (
  <LayoutStatic>
    
    <div className="my-3 p-3 bg-body rounded shadow-sm">

      <h6 className="border-bottom pb-2 mb-0">Atualizações recentes</h6>

      <UserListAvatar name="Joseph Marcel" description="Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia non arcu rutrum congue. Maecenas posuere sit amet dolor id posuere."/>

      <UserListAvatar name="Marcus Pitt" description="Nulla at aliquam odio, posuere tempus nisi. Ut semper suscipit hendrerit. Vivamus vel mauris vel eros ultrices fermentum non at dui." color="#e83e8c"/>

      <UserListAvatar name="Edgar Angel" description="Praesent sit amet dapibus nulla. Vivamus imperdiet, mauris scelerisque varius varius, est odio imperdiet urna, nec porttitor nisl magna id enim." color="#6f42c1"/>

      <small className="d-block text-end mt-3">
        <NextLink href="/users" label="Ver lista completa de clientes"/>
      </small>

    </div>

  </LayoutStatic>
)

export default Home;