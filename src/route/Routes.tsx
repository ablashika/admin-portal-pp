import * as React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import SuccessfulTransactions from "../pages/transactions/Successful";
import DefaultLayout from "../pages/DefaultLayout";
import FailedTransactions from "../pages/transactions/Failed";
import AdminRoles from "../pages/admin/admin.roles";
import AllAdmin from "../pages/admin/all.admin";
import CreateAdmin from "../pages/admin/create.admins";
import Transactions from "../pages/transactions/Transactions";
import Elevy from "../pages/elevy/Elevy";
import ClientsTransactions from "../pages/clients/Transactions";
import CustomersTransactions from "../pages/customers/Transactions";
import Customers from "../pages/customers/Customers";
import Onboarding from "../pages/clients/Onboarding";
import Approved from "../pages/clients/Approved";
import Documents from "../pages/clients/Documents";
import SettlementForm from "../pages/settlement/SettlementForm";
import History from "../pages/settlement/History";
import Approvals from "../pages/settlement/Approvals";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="login" element={<Login />} />

      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route element={<DefaultLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="successful-transactions"
          element={<SuccessfulTransactions />}
        />
        <Route path="failed-transactions" element={<FailedTransactions />} />

        {/* Managa admins */}
        <Route path="manage-admin">
          <Route path="admin-roles" element={<AdminRoles />} />
          <Route path="all-admin" element={<AllAdmin />} />
          <Route path="create-admin" element={<CreateAdmin />} />
        </Route>

        {/* Transactions */}
        <Route path="transactions">
          <Route path="all" element={<Transactions />} />
          <Route path="clients" element={<ClientsTransactions />} />
          <Route path="customers" element={<CustomersTransactions />} />
        </Route>

        {/* Customers */}
        <Route path="customers" element={<Customers />} />

        {/* Clients */}
        <Route path="clients">
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="approved-merchants" element={<Approved />} />
          <Route path="add-documents" element={<Documents />} />
        </Route>

        {/* E-levy charges */}
        <Route path="e-levy" element={<Elevy />} />

        {/* Settlement */}
        <Route path="settlement">
          <Route path="approval" element={<Approvals />} />
          <Route path="history" element={<History />} />
          <Route path="add" element={<SettlementForm />} />
        </Route>
      </Route>
    </Route>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
