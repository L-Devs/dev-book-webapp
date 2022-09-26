import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/index.css";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const root = document.getElementById("root") as HTMLElement;

if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignUp />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}
