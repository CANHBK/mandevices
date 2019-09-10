import { Col, Row } from "antd";

import React from "react";

const Container: React.FC = ({ children }) => {
	return (
		<Row type="flex" justify="center">
			<Col span={20}>{children}</Col>
		</Row>
	);
};

export default Container;
