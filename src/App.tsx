import type { FC } from 'react';
import { DefaultModal } from './components/DefaultModal';

export const App: FC = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatum, nostrum, dolorem a error
        laboriosam officiis corporis tenetur tempore quibusdam incidunt ad cupiditate expedita, dolorum officia ducimus
        porro sapiente optio!
      </p>
      <DefaultModal />
    </>
  );
};
