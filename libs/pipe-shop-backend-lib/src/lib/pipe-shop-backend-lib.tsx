import styles from './pipe-shop-backend-lib.module.scss';

/* eslint-disable-next-line */
export interface PipeShopBackendLibProps {}

export function PipeShopBackendLib(props: PipeShopBackendLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PipeShopBackendLib!</h1>
    </div>
  );
}

export default PipeShopBackendLib;
