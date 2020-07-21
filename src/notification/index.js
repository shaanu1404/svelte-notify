import store from "./notification-store";

export const notify = detail => {
	store.create({
		title: detail.title,
		text: detail.message,
		timeout: detail.timeout,
		type: detail.type,
		showAlways: detail.showAlways
	});
};

export const remove = id => {
	store.remove(id);
};

export const clearAll = () => store.reset();
