export function getUserGithubInfo() {
    let url = "https://api.github.com/repos/Jason-TianrenTan/React-Portfolio/contents/";
    let content_list = fetch(url)
        .then(res => res.json())
        .then(data => data.map(content => {
            return content.url;
        }));
    console.log(content_list);
}