// 'use client';

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTeamMembersByProjectId } from '@/features/teamSlice'; // adjust path if needed

// const TeamMembersByProject = ({ projectId="AAS-IT-TES-005" }) => {
//   const dispatch = useDispatch();

//   const { teamMembersByProjectId, status, error } = useSelector(
//     (state) => state.team
//   );

//   useEffect(() => {
//     if (projectId) {
//       dispatch(getTeamMembersByProjectId(projectId));
//     }
//   }, [dispatch, projectId]);


//   console.log("sgfrr",teamMembersByProjectId?.teamMembers
// )

//   return (
//     <div className="p-4">
 
//     </div>
//   );
// };

// export default TeamMembersByProject;
