interface Permission {
	name: string;
	description: string;
}

interface PermissionGroup {
	name: string;
	permissions: Permission[];
}

export const permissionGroups: PermissionGroup[] = [
	{
		name: "permission",
		permissions: [
			{
				name: "view_permission",
				description: "Quyền xem danh sách các quyền trong hệ thống"
			}
		]
	}
];
