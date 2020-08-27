import React from "react"
import User from "../containers/user/User.jsx"
import Privacy from "../containers/privacy/Privacy.jsx"
import Done from "../containers/done/Done.jsx"

export const baseRoutes = [
    {
        name: "User",
        path: "/user",
        component: <User />,
        exact: true
    }, 
    {
        name: "Privacy",
        path: "/privacy",
        component: <Privacy />,
    }, 
    {
        name: "Done",
        path: "/done",
        component: <Done />,
    }, 
]