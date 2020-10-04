import React, { useEffect, useState } from "react";
import { trendApi } from "../../api";
import TrendPresenter from "./TrendPresenter";

export default () => {
	const [trend, setTrend] = useState({
		loading: true,
		dayTrend: [],
		weekTrend: [],
		dayTrendError: [],
		weekTrendError: [],
	});

	const getData = async () => {
		const [todayTrend, todayTrendDayError] = await trendApi.dayTrend();
		const [weekTrend, weekTrendDayError] = await trendApi.weekTrend();
		setTrend({
			loading: false,
			dayTrend: todayTrend,
			weekTrend: weekTrend,
			dayTrendError: todayTrendDayError,
			weekTrendError: weekTrendDayError,
		});
	};
	useEffect(() => {
		getData();
	}, []);

	return <TrendPresenter {...trend} />;
};
