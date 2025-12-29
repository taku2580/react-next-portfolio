import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '../_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/constants';
import NewsTabs from '../_components/NewsTabs';


export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });
    
    return (
        <>
            <NewsTabs />
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    );
}