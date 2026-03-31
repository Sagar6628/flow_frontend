import { Building2, BuildingIcon, Contact, Image, ImagePlus } from "lucide-react";
import { SectionNavbar } from "../../components/pageui/SectionNavbar";
import type React from "react";
import { Field, FieldDescription, FieldLabel, FieldSet, FieldTitle } from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import { fileToUrl } from "../../util/fileToUrl";
import { useUser } from "../../context/UserContext";
import { Button } from "../../components/ui/button";
import { Spinner } from "../../components/ui/spinner";
import axios from "axios";
import { toast } from "sonner";
import { apiClient } from "../../api/apiClient";

interface OrganisationFormProps {
    title:string,
    description:string
}

interface FormData {
  orgId: number;            
  orgName?: string;           
  email?: string;      
  createdAt?: string;                                
  updatedAt?: string;                     
  phoneNumber?: string;       
//   createdBy: User;             
  description?: string;         
  logo?: File|null;                
  website?: string;
}
export const OrganisationForm:React.FC<OrganisationFormProps> = ({title,description}) => {
    const [formData, setFormData] = useState<FormData>({
      orgId: 0,
      orgName: "",
      description: "",
      updatedAt: "",
      phoneNumber: "",
      website: "",
      logo: null,
    });
    const [uploadedImagePath,setUploadedImagePath] = useState<string |null>(null);
    const [submitting, setSubmitting] = useState(false);
    const user = useUser();

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }   
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        console.log(formData);
        
        try {
            await apiClient.post("/api/organisation/register", formData);
            toast.success("Organisation created successfully.");
            setFormData({
              orgId: 0,
              orgName: "",
              description: "",
              email: "",
              phoneNumber: "",
              website: "",
              logo: null,
            });
        } catch (error) {
            toast.error("Failed to create organisation.");
        } finally {
            setSubmitting(false);

        }

       
        
        
    }
    return (
        <div className="w-full h-full bg-secondary rounded-4xl overflow-hidden ">
            <SectionNavbar
            // title="Create New Organisation"
            // description="Your organisation begins here."
            title={title}
            description={description}
            titleIcon={<Building2/>}
            />
            <form onSubmit={(e) =>handleSubmit(e)} className="pl-15 w-full  h-[89%] grid grid-cols-1 md:grid-cols-4 pb-3  pr-3 gap-2 ">
                <div className="basic-details w-full col-span-1 md:col-span-3 bg-background animate-in slide-in-from-left-5 transition duration-500 shadow-md  p-5 rounded-lg">
                    <FieldSet>
                        <FieldTitle>
                            <BuildingIcon/> 
                            Core Identity
                        </FieldTitle>
                        <FieldDescription>
                            Fill your organisation basic info.
                        </FieldDescription>
                        <div className="flex gap-3">
                            <Field>
                                <FieldLabel htmlFor="orgId">Organisation Id</FieldLabel>
                                <Input type="number" id="orgId" name="orgId" onChange={handleInputChange} placeholder="Enter organisation id"/>
                            </Field>
                             <Field>
                                <FieldLabel htmlFor="orgName">Organisation Name</FieldLabel>
                                <Input id="orgName" placeholder="Enter organisation name" onChange={handleInputChange} name="orgName"/>
                            </Field>
                        </div>
                        <Field>
                            <FieldLabel htmlFor="description">Description</FieldLabel>
                            <textarea id="description" aria-label="desc" name="description" onChange={handleInputChange} placeholder="Enter organisation description" className="border rounded-lg p-2"/>
                        </Field>
                    </FieldSet>
                </div>
                <div className="branding  col-span-1 w-full bg-background animate-in slide-in-from-top-5 transition duration-500 shadow-md  p-5 rounded-lg">
                    <FieldSet>
                        <FieldTitle >
                            <ImagePlus />
                            Branding
                        </FieldTitle>
                        <FieldDescription>
                            Upload your logo here.
                        </FieldDescription>
                        <div className="flex gap-3 w-full min-h-40  justify-center items-center">
                            <div className="logo-container w-1/2 aspect-square flex items-center justify-center  overflow-hidden bg-secondary rounded-full relative">
                                {
                                    !uploadedImagePath?<Image/>:(
                                       <img src={uploadedImagePath} alt="preview" className=" absolute top-0 left-0"/>
                                    )
                                }
                            </div>
                            <Field>
                                <FieldLabel htmlFor="logo" >Logo</FieldLabel>
                                 <Input id="logo" placeholder="Upload logo" name="logo"   type="file" accept="jpg,jpeg,png" onChange={(e) => {setUploadedImagePath(fileToUrl(e)),handleInputChange(e)}}/>
                                 <FieldDescription>Upload your jpg/jpeg/png file</FieldDescription>
                            </Field>
                        </div>
                    </FieldSet>
                </div>
                <div className="org-details w-full col-span-1 md:col-span-3 bg-background animate-in slide-in-from-bottom-5 transition duration-500 shadow-md  p-5 rounded-lg">
                    <FieldSet>
                        <FieldTitle>
                            <Contact/> 
                            Contact & Digital presence
                        </FieldTitle>
                        <FieldDescription>
                            Fill your organisation contact details and digital presence info.
                        </FieldDescription>
                        <div className="flex gap-3">
                            <Field>
                                <FieldLabel htmlFor="email">Official email</FieldLabel>
                                <Input id="email" name="email" onChange={handleInputChange} placeholder="Enter organisation email"/>
                            </Field>
                             <Field>
                                <FieldLabel htmlFor="phoneNumber">Phone number</FieldLabel>
                                <Input id="phoneNumber" name="phoneNumber" onChange={handleInputChange} type="number" placeholder="Enter organisation phone number"/>
                            </Field>
                        </div>
                         <Field>
                            <FieldLabel htmlFor="website">ORGANISATION WEBSITE</FieldLabel>
                            <Input id="website" name="website" onChange={handleInputChange} type="url" placeholder="Enter organisation website"/>
                        </Field>
                   </FieldSet>
                </div>
                <div className="col-span-1 grid gap-3 animate-in slide-in-from-right-5 font-sans transition duration-500">
                    <div className="branding  w-full bg-background  shadow-md  p-5 rounded-lg">
                    <div>
                        <FieldSet>
                            <FieldTitle  >
                            {/* <ImagePlus /> */}
                            SYSTEM RECORD
                        </FieldTitle>
                        </FieldSet>
                        <div className="flex flex-col gap-3 w-full mt-3  justify-center items-center"> 
                            <span className="flex w-full justify-between">
                                <h3 className="text-sm">Created by</h3>
                                 <p className="text-sm">N/A</p>
                            </span>
                            <span className="flex w-full justify-between">
                                <h3 className="text-sm">Created at</h3>
                                 <p className="text-sm">{new Date().toLocaleDateString()}</p>
                            </span>
                             <span className="flex w-full justify-between">
                                <h3 className="text-sm">Last updated at</h3>
                                <p className="text-sm">N/A</p>
                            </span>
                        </div>
                    </div>
                    
                </div>
                <Button className="w-full disabled={submitting} onClick={()=>setSubmitting(true)}">
                        {
                            submitting?<Spinner  className=""/>:""
                        }
                        {
                            submitting?"Creating...":"Create Organisation"
                        }
                    </Button>
                </div>
            </form>
        </div>
    )
}