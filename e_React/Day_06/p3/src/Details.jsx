import { Outlet, Link } from "react-router";

function Details() {
    return (
        <>
            {/* 🏠 Navigation Menu for Nested Routes */}
            <nav>
                <Link to="/Details">Details</Link> {/* 🔗 Navigates to the Details page */}
                <Link to="Hello">Hello</Link> {/* 🔗 Navigates to /details/Hello */}
                <Link to="Hi">Hi</Link> {/* 🔗 Navigates to /details/Hi */}
            </nav>

            {/* 🔎 Page Title */}
            <h1>Welcome to Details Page</h1>

            {/* 🔀 Nested Route Outlet */}
            <Outlet /> 
            {/*
              📌 What is <Outlet />?
              - It serves as a placeholder for nested routes.
              - When a nested route (Hello or Hi) is visited, its component will render here.
            */}
        </>
    );
}

export default Details;
