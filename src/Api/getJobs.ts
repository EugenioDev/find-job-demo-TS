import axios from "axios";
  import { JobsModel } from "../Model/JobModel";


export interface Options {
    url: string
  }


export const getJobs = async () => {

    const options: Options = {
      url: 'https://jobicy.com/api/v2/remote-jobs'
    };

      const response = await axios.get<JobsModel>(options.url);
      return response.data

}