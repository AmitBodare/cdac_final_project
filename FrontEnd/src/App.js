
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import CustomerSignupLogin from "./Component/CustomerSignupLogin";
import MechanicSignupLogin from "./Component/MechanicSignupLogin";
import Loginpage from "./Component/Loginpage";
import CustomerSignup from "./Component/CustomerSignup";
import MechanicSignup from "./Component/MechanicSignup";
import CustomerDashBoard from './Component/CustomerDashboard';
import Request from './Component/Request';
import CustomerProfile from './Component/CustomerProfile';
import CustomerEditProfile from './Component/CustomerEditProfile';
import CustomerFeedback from './Component/CustomerFeedback';
import CustomerRequest from './Component/CustomerRequest';
import PendingRequest from './Component/PendingRequest';
import ApprovedRequest from './Component/ApprovedRequest';
import ApprovedRequestInvoice from './Component/ApprovedRequestInvoice';
import MechanicDashboard from './Component/MechanicDashboard';
import MechanicEditProfile from './Component/MechanicEditProfile';
import MechanicProfile from './Component/MechanicProfile';
import AdminRequest from './Component/AdminRequest';
import { AdminChangeReq } from './Component/AdminChangeReq';
import ApproveEnquiry from './Component/ApproveEnquiry';
import MechanicWorkAssign from './Component/MechanicWorkAssign';
import UpdateWorkStatus from './Component/UpdateWorkStatus';
import MechanicFeedback from './Component/MechanicFeedback';
import AdminFeedbackReview from './Component/AdminFeedbackReview';
import AdminDashboard from './Component/AdminDashboard';
import EnquiryMadeByCustomer from './Component/EnquiryMadeByCustomer';
import AdminMakeRequest from './Component/AdminMakeRequest';
import AdminServiceCost from './Component/AdminServiceCost';
import AdminCustomer from './Component/AdminCustomer';
import ViewAllCustomers from './Component/ViewAllCustomers';
import AdminMakeCustomer from './Component/AdminMakeCustomer';
import AdminCustomerEnquiry from './Component/AdminCustomerEnquiry';
import AdminCustomerInvoice from './Component/AdminCustomerInvoice';
import AdminCustomerChangeProfile from './Component/AdminCustomerChangeProfile';
import AdminMakeMechanic from './Component/AdminMakeMechanic';
import AdminMechanic from './Component/AdminMechanic';
import ViewAllMechanic from './Component/ViewAllMechanic';
import AdminMechanicChangeProfile from './Component/AdminMechanicChangeProfile'
import AdminApproveMechanic from './Component/AdminApproveMechanic';
import UpdateMechanicSalary from './Component/UpdateMechanicSalary';
import ViewAllMechanicSalary from './Component/ViewAllMechanicSalary';


function App() {



  return (

    <Router>
      <div >


        <Routes>

          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/CustomerSignupLogin" element={<CustomerSignupLogin />} />
          <Route path="/MechanicSignupLogin" element={<MechanicSignupLogin />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/customer/makeRequest" element={<Request />} />
          <Route path="/CustomerSignup" element={<CustomerSignup />} />
          <Route path="/MechanicSignup" element={<MechanicSignup />} />
          <Route path="/CustomerRequest" element={<Request />} />
          <Route path="/CustomerDashboard" element={<CustomerDashBoard />} />
          <Route path="/CustomerProfile" element={<CustomerProfile />} />
          <Route path="/CustomerEditProfile" element={<CustomerEditProfile />} />
          <Route path="/Customer/feedback" element={<CustomerFeedback />} />
          <Route path="/customer/request" element={<CustomerRequest />} />
          <Route path="/customer/pendingrequest" element={<PendingRequest />} />
          <Route path="/customer/approvedrequest" element={<ApprovedRequest />} />
          <Route path="/customer/approvedrequestbill" element={<ApprovedRequestInvoice />} />
          <Route path="/MechanicDashboard" element={<MechanicDashboard />} />
          <Route path="/MechanicEditProfile" element={<MechanicEditProfile />} />
          <Route path="/MechanicProfile" element={<MechanicProfile />} />
          <Route path="/admin/approveEnquiry" element={<ApproveEnquiry />} />
          <Route path="/admin/changeRequest" element={<AdminChangeReq />} />
          <Route path="/admin/request" element={<AdminRequest />} />
          <Route path="/mechanic/changeRequestStatus" element={<UpdateWorkStatus />} />
          <Route path="/mechanic/workassigned" element={<MechanicWorkAssign />} />
          <Route path="/mechanic/feedback" element={<MechanicFeedback />} />
          <Route path="/admin/feedbackReview" element={<AdminFeedbackReview />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/enquiryMadeByCustomer" element={<EnquiryMadeByCustomer />} />
          <Route path="/admin/makerequest" element={<AdminMakeRequest />} />
          <Route path="/admin/servicecost" element={<AdminServiceCost />} />
          <Route path="/admin/adminCustomer" element={<AdminCustomer />} />
          <Route path="/admin/allCustomers" element={<ViewAllCustomers />} />
          <Route path="/admin/makeCustomer" element={<AdminMakeCustomer />} />
          <Route path="/admin/adminCustomerEnquiry" element={<AdminCustomerEnquiry />} />
          <Route path="/admin/customer/invoice" element={<AdminCustomerInvoice />} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
           <Route path="/admin/updateCustomer" element={<AdminCustomerChangeProfile/>}/>
          <Route path="/admin/makeMechanic" element={<AdminMakeMechanic/>}/>
          <Route path="/admin/mechanic" element={<AdminMechanic/>}/>
          <Route path="/admin/allMechanic" element={<ViewAllMechanic/>}/>
          <Route path="/admin/updateMechanic" element={<AdminMechanicChangeProfile/>}/>
          <Route path="/admin/approveMechanic" element={<AdminApproveMechanic/>}/>
          <Route path="/admin/updateSalary" element={<UpdateMechanicSalary/>}/>
          <Route path="/admin/mechanic/salary" element={<ViewAllMechanicSalary/>}/>
          
        </Routes>



      </div>
    </Router>
    //  <CustomerDashBoard/>


  );
}

export default App;
