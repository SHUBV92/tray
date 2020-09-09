import React from "react"
import User from "../containers/User/User.jsx"
import Privacy from "../containers/Privacy/Privacy.jsx"
import Done from "../containers/Done/Done.jsx"

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