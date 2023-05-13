import { store } from "@pipe-shop/pipe-shop-frontend-lib"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../routes"

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  )
}

export default App
