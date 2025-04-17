import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Transactions from "./pages/Transactions"
import RequestMoney from "./pages/RequestMoney"
import SendMoney from "./pages/SendMoney"
import DepositMoney from "./pages/DepositMoney"
import IbanMoney from "./pages/IbanMoney"
import GiveMoney from "./pages/GiveMoney"
import Help from "./pages/Help"
import Profile from "./pages/Profile"
import Security from "./pages/Security"
import PaymentMethod from "./pages/PaymentMethod"
import Notifications from "./pages/Notifications"
import LastOperations from "./pages/LastOperations"
import QuickTransactions from "./pages/QuickTransactions"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { element: <Home />, path: "" },
            { element: <Transactions />, path: "transactions" },
            { element: <RequestMoney />, path: "request-money" },
            { element: <SendMoney />, path: "send-money" },
            { element: <GiveMoney />, path: "give-money" },
            { element: <GiveMoney />, path: "withdraw-money" },
            { element: <DepositMoney />, path: "deposit-money" },
            { element: <IbanMoney />, path: "iban-money" },
            { element: <Profile />, path: "profile" },
            { element: <Security />, path: "security" },
            { element: <PaymentMethod />, path: "payment-method" },
            { element: <Notifications />, path: "notifications" },
            { element: <Help />, path: "help" },
            { element: <LastOperations />, path: "last-operations" },
            { element: <QuickTransactions />, path: "quick-transactions" },
        ]
    },
])
export default routes