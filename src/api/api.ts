import { TContributor } from '../type';

const fetchResponseCheck = async (res: Response) => {
    if (res.ok) {
        return res.json();
    } else {
        const message = await res.json().then((err: { [key in string]: string | boolean }) => err.message);
        return Promise.reject({ status: res.status, message });
    }
};

const fetchContributors = async (owner: string, repo: string): Promise<TContributor[]> => {
    const contributors: Array<TContributor> = [];
    let page: number = 1;
    while (true) {
        const result: Array<TContributor> = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100&page=${page}`,
            {
                method: 'GET',
            },
        ).then(fetchResponseCheck);
        contributors.push(...result);
        page += 1;
        if (result.length < 100) {
            break;
        }
    }
    return contributors;
};

export default fetchContributors;
