import { writable } from "svelte/store";
import shortid from "shortid";

const addNotification = (notification, update) => {
	if (
		(notification.text === "" || notification.text === undefined) &&
		typeof notification.timeout !== "number"
	) {
		throw new Error("Invalid notification parameters.");
	}

	const newNoti = {
		_id: shortid.generate(),
		timeout: 5000,
		...notification
	};

	update(notis => {
		if (!newNoti.showAlways)
			setTimeout(
				() => removeNotification(newNoti._id, update),
				newNoti.timeout
			);

		return [...notis, newNoti];
	});
};

const removeNotification = (nid, update) => {
	update(notis => {
		return notis.filter(n => n._id !== nid);
	});
};

const createNotificationStore = () => {
	const { set, subscribe, update } = writable([]);

	return {
		subscribe,
		create: n => addNotification(n, update),
		remove: nid => removeNotification(nid, update),
		reset: () => set([])
	};
};

export default createNotificationStore();
