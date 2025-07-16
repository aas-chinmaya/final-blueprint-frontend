import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/lib/axios';

// Create Project MoM
export const createProjectMoM = createAsyncThunk(
  'projectMom/createProjectMoM',
  async (momData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/mom/project/createprojectmom', momData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create project MoM');
    }
  }
);

const projectMoMSlice = createSlice({
  name: 'projectMom',
  initialState: {
    projectMoM: null,
    projectMoMLoading: false,
    projectMoMError: null,
  },
  reducers: {
    resetProjectMoMState: (state) => {
      state.projectMoM = null;
      state.projectMoMLoading = false;
      state.projectMoMError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProjectMoM.pending, (state) => {
        state.projectMoMLoading = true;
        state.projectMoMError = null;
      })
      .addCase(createProjectMoM.fulfilled, (state, action) => {
        state.projectMoMLoading = false;
        state.projectMoM = action.payload;
      })
      .addCase(createProjectMoM.rejected, (state, action) => {
        state.projectMoMLoading = false;
        state.projectMoMError = action.payload;
      });
  },
});

export const { resetProjectMoMState } = projectMoMSlice.actions;
export default projectMoMSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance } from '@/lib/axios';

// // Fetch all Project MoMs
// export const fetchProjectMoMs = createAsyncThunk(
//   'projectMom/fetchProjectMoMs',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get('/mom/project/getall');
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to fetch Project MoMs');
//     }
//   }
// );

// // Fetch Project MoM by Meeting ID
// export const fetchProjectMoMByMeetingId = createAsyncThunk(
//   'projectMom/fetchProjectMoMByMeetingId',
//   async (meetingId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(`/mom/project/byMeeting/${meetingId}`);
//       return response.data.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to fetch Project MoM by meeting ID');
//     }
//   }
// );

// // Fetch Project MoM view (PDF binary data)
// export const fetchProjectMoMView = createAsyncThunk(
//   'projectMom/fetchProjectMoMView',
//   async (momId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.get(`/mom/project/view/${momId}`, {
//         responseType: 'blob',
//       });

//       const contentType = response.headers['content-type'];
//       if (!contentType.includes('application/pdf')) {
//         throw new Error('Response is not a valid PDF');
//       }

//       const pdfUrl = URL.createObjectURL(response.data);
//       return { pdfUrl, momId };
//     } catch (error) {
//       return rejectWithValue(error.message || 'Failed to fetch Project MoM PDF');
//     }
//   }
// );

// // Create Project MoM
// export const createProjectMoM = createAsyncThunk(
//   'projectMom/createProjectMoM',
//   async (momData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/mom/project/create', momData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to create Project MoM');
//     }
//   }
// );

// // Update Project MoM
// export const updateProjectMoM = createAsyncThunk(
//   'projectMom/updateProjectMoM',
//   async (momData, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post('/mom/project/create', momData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to update Project MoM');
//     }
//   }
// );

// const projectMoMSlice = createSlice({
//   name: 'projectMom',
//   initialState: {
//     projectMom: [],
//     projectMomLoading: false,
//     projectMomError: null,

//     projectMomByMeetingId: null,
//     projectMomByMeetingIdLoading: false,
//     projectMomByMeetingIdError: null,

//     projectMomView: null,
//     projectMomViewLoading: false,
//     projectMomViewError: null,
//   },
//   reducers: {
//     resetProjectMoMByMeetingId: (state) => {
//       if (state.projectMomView?.pdfUrl) {
//         URL.revokeObjectURL(state.projectMomView.pdfUrl);
//       }
//       state.projectMomByMeetingId = null;
//       state.projectMomByMeetingIdLoading = false;
//       state.projectMomByMeetingIdError = null;
//       state.projectMomView = null;
//       state.projectMomViewLoading = false;
//       state.projectMomViewError = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch All
//       .addCase(fetchProjectMoMs.pending, (state) => {
//         state.projectMomLoading = true;
//         state.projectMomError = null;
//       })
//       .addCase(fetchProjectMoMs.fulfilled, (state, action) => {
//         state.projectMomLoading = false;
//         state.projectMom = action.payload;
//       })
//       .addCase(fetchProjectMoMs.rejected, (state, action) => {
//         state.projectMomLoading = false;
//         state.projectMomError = action.payload;
//       })

//       // Fetch by Meeting ID
//       .addCase(fetchProjectMoMByMeetingId.pending, (state) => {
//         state.projectMomByMeetingIdLoading = true;
//         state.projectMomByMeetingIdError = null;
//       })
//       .addCase(fetchProjectMoMByMeetingId.fulfilled, (state, action) => {
//         state.projectMomByMeetingIdLoading = false;
//         state.projectMomByMeetingId = action.payload;
//       })
//       .addCase(fetchProjectMoMByMeetingId.rejected, (state, action) => {
//         state.projectMomByMeetingIdLoading = false;
//         state.projectMomByMeetingIdError = action.payload;
//       })

//       // View PDF
//       .addCase(fetchProjectMoMView.pending, (state) => {
//         state.projectMomViewLoading = true;
//         state.projectMomViewError = null;
//       })
//       .addCase(fetchProjectMoMView.fulfilled, (state, action) => {
//         state.projectMomViewLoading = false;
//         state.projectMomView = action.payload;
//       })
//       .addCase(fetchProjectMoMView.rejected, (state, action) => {
//         state.projectMomViewLoading = false;
//         state.projectMomViewError = action.payload;
//       })

//       // Create
//       .addCase(createProjectMoM.pending, (state) => {
//         state.projectMomLoading = true;
//         state.projectMomError = null;
//       })
//       .addCase(createProjectMoM.fulfilled, (state, action) => {
//         state.projectMomLoading = false;
//         state.projectMom.push(action.payload);
//         state.projectMomByMeetingId = action.payload;
//       })
//       .addCase(createProjectMoM.rejected, (state, action) => {
//         state.projectMomLoading = false;
//         state.projectMomError = action.payload;
//       })

//       // Update
//       .addCase(updateProjectMoM.pending, (state) => {
//         state.projectMomLoading = true;
//         state.projectMomError = null;
//       })
//       .addCase(updateProjectMoM.fulfilled, (state, action) => {
//         state.projectMomLoading = false;
//         const updated = action.payload;
//         state.projectMom = state.projectMom.map((m) =>
//           m._id === updated._id ? updated : m
//         );
//         if (state.projectMomByMeetingId && state.projectMomByMeetingId._id === updated._id) {
//           state.projectMomByMeetingId = updated;
//         }
//       })
//       .addCase(updateProjectMoM.rejected, (state, action) => {
//         state.projectMomLoading = false;
//         state.projectMomError = action.payload;
//       });
//   },
// });

// export const { resetProjectMoMByMeetingId } = projectMoMSlice.actions;
// export default projectMoMSlice.reducer;
