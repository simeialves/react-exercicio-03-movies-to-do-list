import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
const MovieDetail = lazy(() => import(/* webpackChunkName: "movieDetail" */ "../views/MovieDetail"));

export function ApplicationRoutes() {
	return (
		<Suspense fallback={<div>Carregando...</div>}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie/:movieId" element={<MovieDetail />} />
			</Routes>
		</Suspense>
	);
}
