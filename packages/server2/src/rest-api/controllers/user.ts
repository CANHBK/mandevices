import { Dictionary, Request, Response } from "express-serve-static-core";

import { UserAccountController } from "../../database/controller/UserController";

export const emailConfirmHandler = async (
	req: Request<Dictionary<string>>,
	res: Response
) => {
	const { email, token } = req.query;

	const userAccountController = UserAccountController.getInstance();
	const result = await UserAccountController.getInstance().getByEmail(
		email,
		"password",
		"emailConfirmationToken"
	);

	if (!result) {
		return res.send("Tài khoản không tồn tại");
	}
	if (!result.emailConfirmationToken) {
		return res.send("Tài khoản đã được kích hoạt");
	}

	const isMatchToken = token === result.emailConfirmationToken;

	if (isMatchToken) {
		try {
			await userAccountController.setEmailConfirmed(email);
		} catch (error) {
			return res.send(error);
		}

		return res.render("confirm");
	}
	return res.send("Mã xác thực không chính xác");
};
