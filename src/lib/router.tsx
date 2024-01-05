import { createBrowserRouter } from "react-router-dom";
import AllCalls from "../pages/AllCalls";
import CallDetails from "../pages/CallDetails";
import ArchievedCalls from "../pages/ArchievedCalls";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AllCalls />,
	},
	{
		path: "/archieved",
		element: <ArchievedCalls />,
	},
	{
		path: "/call/:id",
		element: <CallDetails />,
	},
]);

export default router;
