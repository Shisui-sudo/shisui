const downloader = (prefix, botName, ownerName) => {
	return `
「 *BOT_NAME* 」

◪ *INFO*
  ❏ Prefix: 「  ${wa.me/5527998976500}  」
  ❏ Creator: Shisui
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest
  ├─ ❏ ${prefix}ytmp3
  ├─ ❏ ${prefix}ytmp4
  └─ ❏ ${prefix}tiktok`
}
exports.downloader = downloader
