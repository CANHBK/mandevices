import React, { useEffect, useState } from "react";
import { Result } from "antd";

/**
 * Component dùng để phát hiện các trình chặn quảng cáo
 *
 */
export const DetectAdBlocks: React.FC = ({ children }) => {
	const [hasAdBlocks, setHasAdblocks] = useState(false);

	useEffect(() => {
		// Các trình chặn quảng cáo sẽ block request đến link này, từ đó sẽ
		// phát hiện được trình chặn quảng cáo
		const adsUrl =
			"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
		const requestOptions: RequestInit = {
			method: "HEAD",
			mode: "no-cors"
		};

		// Khởi tạo request
		const request = new Request(adsUrl, requestOptions);

		// fetch request
		window
			.fetch(request)
			.then(_ => {})
			// Nếu có lỗi (do adblocks chặn)
			.catch(_ => {
				setHasAdblocks(true);
			});
	}, [hasAdBlocks]);
	
	return <>{hasAdBlocks?<ErrorMessage/>:children}</>;
};

const ErrorMessage = () => (
	<Result 
	status="error" 
	title="Lỗi" 
	subTitle="Làm ơn hãy tắt các tiện ích chặn quảng cáo để tiếp tục sử dụng hệ thống"
	/>
)

