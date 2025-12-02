import Companies from "@/components/recruiter/Companies";
import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
  },
  reducers: {
    // actions
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
  },
});

export const { setLoading, setSingleCompany, setCompanies } =
  companySlice.actions;
export default companySlice.reducer;
