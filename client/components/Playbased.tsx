import playbasedImg from '../assets/playbased.png'

function Prompter() {
  return (
    <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto sm:m-5">
      <div className="prompter-bg flex content-start justify-center flex-wrap ml-5">
        <div className="flex content-center flex-wrap w-2/3 justify-center mt-10 mr-5">
          <ul>
            <li className="font-bold mb-3 text-2xl">PlayBased</li>
            <li>
              <strong>Status:</strong> Development V1
            </li>
            <li>
              <strong>Tech: </strong>React | React-Router | .NET | Entity
              Framework Core | Typescript | Azure SQL Databse | Auth0 | Azure
              Blob Storage
            </li>

            <li className="mt-3">
              A website to provide parents a range of different activities to do
              with their children. They are categorised by age group and provide
              a list of materials and instructions. The user is able to search
              by materials and can save activities to their favourites. This was
              my first attempt at using .net, Azure Sql DB and Azure Blob
              Storage.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex content-center flex-wrap">
        <a
          href="https://github.com/Katie-Davies/Playbased-MicrosoftStudentACC"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={playbasedImg}
            alt="view of Prompter website"
            className="max-w-sm scale-90 hover:scale-100"
          ></img>
        </a>
      </div>
    </div>
  )
}
export default Prompter
