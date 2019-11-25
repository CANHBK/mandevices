const permissions = ["resource_list"] as const;

type Permission = typeof permissions[number];

const permissionDescription: Record<Permission, string> = {
	resource_list: "Xem danh sách các tài nguyên của hệ thống"
};
