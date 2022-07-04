import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/index.css";

import SignUp from "./pages/SignUp";

const root = document.getElementById("root") as HTMLElement;

if (root) {
	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignUp />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}
