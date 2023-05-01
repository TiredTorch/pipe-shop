import styles from './pipe-shop-frontend-lib.module.scss';

/* eslint-disable-next-line */
export interface PipeShopFrontendLibProps {}

export function PipeShopFrontendLib(props: PipeShopFrontendLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PipeShopFrontendLib!</h1>
    </div>
  );
}

export default PipeShopFrontendLib;
