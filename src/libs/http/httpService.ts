import axiosInstance from "./auth"

interface Login {
    data: { token: string }
    email: string
    password: string
    role: string
  }

interface Image {
    image: string
}

interface Posts {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  text: string;
  coverUrl: string;
  isBookEssay: boolean;
  likeNumer: number;
}


export const LoginPost = (data = {}): Promise<{ data: Login }> =>
  axiosInstance.post(`/login`, data)

// mock 
export const PostImage = (data = {}): Promise<{ data: Image }> =>
  axiosInstance.post(`/`, data)

// mock 
export const AddPost = (data = {}): Promise<{ data: Posts }> =>
  axiosInstance.post(`/`, data)

