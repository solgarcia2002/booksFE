import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"

interface BookType {
  id: number
  name: string
  authorName: string
  description: string
}

interface BookCardType {
  bookData: BookType
}

const BookCard = ({bookData}: BookCardType) => (
  <>
    <div className={'cardContainer'}>
      <div className={'bookIconContainer'}>
        <LibraryBooksIcon className={'bookIcon'} sx={{fontSize: 150}} style={{color: '#DDD', margin: 'auto'}}/>
      </div>
      <div className={'bookInfo'}>
        <h3>{bookData.name}</h3>
        <h4>{bookData.authorName}</h4>
        <p>{bookData.description}</p>
      </div>
    </div>
    <style jsx>{`
      h3 {
        color: #666;
        font-size: 3rem;
        margin-bottom: 0;
      }
      h4{
        color: #0070F3;
        font-size: 1.2rem;
        margin-top: 0;
      }
      p{
        color:#444;
      }
      .cardContainer {
        min-width: 30rem;
        min-height: 20rem;
        display: block;
        position: relative;
      }

      .bookIconContainer, .bookInfo {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .bookIconContainer {
        min-height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .bookInfo {
        z-index: 10;
      }
    `}</style>
  </>
)
export default BookCard
