import Booking from "../pages/dashboard/Booking";
import BookingList from "../pages/dashboard/BookingList";
import MyProfile from "../pages/dashboard/MyProfile";
import Review from "../pages/dashboard/Review";

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
