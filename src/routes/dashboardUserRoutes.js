import MyProfile from "../pages/dashboard/all/MyProfile";
import Booking from "../pages/dashboard/user/Booking";
import BookingList from "../pages/dashboard/user/BookingList";
import Review from "../pages/dashboard/user/Review";

export const dashboardUserRoutes = [
  {
    path: "booking",
    name: "booking",
    Component: Booking,
  },
  {
    path: "bookingList",
    name: "bookingList",
    Component: BookingList,
  },
  {
    path: "review",
    name: "review",
    Component: Review,
  },
  {
    path: "myProfile",
    name: "myProfile",
    Component: MyProfile,
  },
];
