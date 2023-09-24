export interface RealisationArticleI {
  id: number;
  URL: string;
  paragraph: string;
  realisationCategoryId: number;
  title: string;
}

export interface CategoryWithRealisationArticlesI {
  id: number;
  photo_category_name: string;
  realisationArticles: RealisationArticleI[];
}

export interface ImageUrlI {
  URL: string;
}

// Interfaces about prestation page :

export interface CategoryNameI {
  photo_category_name: string;
}

export interface PrestationCardI {
  index: number;
  URL: string;
  paragraph: string;
}

// Interface about the header title :

export interface HeaderTitleI {
  title: string;
}

// Interface about personnal informations :
export interface PersonnalInfosI {
  id?: number;
  photo_url: string;
  profile_paragraph: string;
}

export interface OptionSelectorI {
  option: string;
}

export interface AdminInformationModalProps {
  options: OptionSelectorI[];
}

// Interfaces that concern inspiration tables:
export interface InspirationImageI {
  id: number;
  URL: string;
  label: string;
  inspirationCategoryId?: number;
}

// Interfaces that concern user data:

export interface UserDataI {
  id?: number;
  email: string;
  password?: string;
}

export interface UserContextValue {
  user: UserDataI | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserDataI | undefined>>;
}

export interface TokenDecodedI {
  iat: number;
  payload: UserDataI;
}

// Interfaces that concern the admin panel :

export interface AdminSectionI {
  category: string;
}

export type AdminButtonI = {
  adminButton: string;
  handleClick?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Interface about the form data from the contact page :

export interface FormDataI {
  name: string;
  email: string;
  message: string;
}