import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUploadedFiles } from "../../actions/fileAction";
import Hero from "../layout/Hero";
import  Pagination  from 'react-js-pagination';
import './Pagination.css'
function GetFiles() {
  const [index, setindex] = useState(0);
  const { resultPerPage,fileCount,files, loading } = useSelector((state) => state.file);
  const [searchValue, setsearchValue] = useState("")
  const [keyword, setkeyword] = useState("")
  const dispatch = useDispatch();
  const [currentPage,setCurrentPage]=useState(1);
  const setCurrentPageNo=(e)=>{
    setCurrentPage(e)
  }
  useEffect(() => {
    dispatch(getUploadedFiles(currentPage,keyword));
  }, [dispatch,currentPage,keyword]);

  if (files === "You need to add the data") {
    return (
      <>
        <Hero text="Get Your uploaded files here" />
        <div class="flex justify-center mt-8">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 h-54">
            <div
              class="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-primary bg-gradient-to-b from-primary to-[#179BEE] py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
              data-wow-delay=".1s
              "
            >
           
              <span
                class="mb-2 block text-base font-medium uppercase text-white"
              >
              Upload 
              </span>
            
              <div class="mb-10">
                <p class="mb-1 text-base font-medium leading-loose text-white">
                 You don't have uploaded any files Please Upload
                </p>
             
                <p
                  class="mb-1 text-base font-medium leading-loose text-white"
                >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perferendis distinctio rerum.
                </p>
              </div>
              <div class="w-full">
                <a
                  href="/file/uploadfile"
                  class="inline-block rounded-full border border-white bg-white py-4 px-11 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:border-dark hover:bg-dark hover:text-white"
                >
                  Upload
                </a>
              </div>
            </div>
            </div>
          </div>
      </>
    );
  } else {
    return (
      <>
        <Hero text="Get Your uploaded files here" />
        <div class="flex justify-center mt-8">
  <div class="mb-3 xl:w-96">
    <div class="relative mb-4 flex w-full flex-wrap items-stretch">
      <input  onChange={(e)=>{
          setsearchValue(e.target.value)
        }} value={searchValue} 
        type="search" 
        class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon3" />
      <button onClick={()=>{setkeyword(searchValue)}}
        class="relative z-[2] rounded-r border-2 border-gray-700 bg-gray-600 px-6 py-2 text-xs font-medium uppercase text-white hover:text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        type="button"
        id="button-addon3"
        data-te-ripple-init>
        Search
      </button>
    </div>
  </div>
</div>
       
        <div className="container my-8">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Orignail Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    New File Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Your CID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Uploaded At
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
          
                {files &&
                  Array.from(files).map((file) => (
                    <tr class="bg-gray-800 border-gray-700 hover:bg-gray-600">
                      <td class="py-4 px-6">{file.originalfileName}</td>
                      <td class="py-4 px-6">{file.newfileName}</td>
                      <td class="py-4 px-6">{file.cid}</td>
                      <td class="py-4 px-6">
                        {String(file.createdAt).slice(0, 10)}
                      </td>
                      <td class="py-2 px-4 text-right">
                        <a
                          href={`https://${file.cid}.ipfs.w3s.link/${file.originalfileName}`}
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                        >
                          {" "}
                          Your File
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='paginationBox'>
                <Pagination activePage={currentPage} itemsCountPerPage={resultPerPage}
                totalItemsCount={fileCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass='page-item'
                linkClass='page-link'
                activeClass='pageItemActive'
                activeLinkClass='pageLinkActive'
                />
                </div>
        <div className="flex justify-center items-center">
          <a href="/file/uploadFile" className="outline-none">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Upload Files
            </button>
          </a>
        </div>
      </>
    );
  }
}

export default GetFiles;
