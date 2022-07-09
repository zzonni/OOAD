import React from "react";
import './MovieManage.scss'
import AdminHeader from "../AdminHeader";
import { Table } from 'reactstrap'
import './MovieManage.scss'
import PaginationComp from "../../PaginationComp";
import MovieModal from "./MovieModal";

class MovieManage extends React.Component {
   render() {
      return (
         <>
            <AdminHeader />
            <PaginationComp />
            <Table bordered className="movie-table">
               <thead>
                  <tr>
                     <th>
                        #
                     </th>
                     <th>
                        Name
                     </th>
                     <th>
                        Date
                     </th>
                     <th>
                        CategoryId
                     </th>
                     <th>
                        Duration
                     </th>
                     <th>
                        Rate
                     </th>
                     <th>
                        Image
                     </th>
                     <th>
                        Actions
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th scope="row">
                        1
                     </th>
                     <td>
                        Mark
                     </td>
                     <td>
                        Otto
                     </td>
                     <td>
                        @mdo
                     </td>
                     <td>
                        @mdo
                     </td>
                     <td>
                        DA, HN
                     </td>
                     <td>
                        avenger.jpg
                     </td>
                     <td>
                        <button className="btn-edit">Edit</button>
                        <button className="btn-delete">Delete</button>
                     </td>
                  </tr>
               </tbody>
            </Table>
            <MovieModal />
         </>
      )
   }
}

export default MovieManage