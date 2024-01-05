export type Call = {
	id: string;
	created_at: string;
	direction: "inbound" | "outbound";
	from: string;
	to: string;
	via: string;
	duration: number;
	is_archived: boolean;
	call_type: "missed" | "answered" | "voicemail";
};

export type ArchiveRequest = {
	is_archived: boolean;
};