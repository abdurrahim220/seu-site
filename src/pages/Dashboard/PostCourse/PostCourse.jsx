import React from 'react'
import Select from "react-select"

import { useForm, Controller, useFieldArray } from 'react-hook-form';
import Swal from 'sweetalert2';

const PostCourse = () => {
    const {
        register, control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'topicsCovered',
    });

    const { fields: textbooksFields, append: appendTextbook, remove: removeTextbook } = useFieldArray({
        control,
        name: 'resources.textbooks',
    });

    const { fields: onlineResourcesFields, append: appendOnlineResource, remove: removeOnlineResource } = useFieldArray({
        control,
        name: 'resources.onlineResources',
    });

    const { fields: prerequisitesFields, append: appendPrerequisite, remove: removePrerequisite } = useFieldArray({
        control,
        name: 'prerequisites',
    });

    const { fields: learningObjectivesFields, append: appendLearningObjectives, remove: removeLearningObjectives } = useFieldArray({
        control,
        name: 'learningObjectives',
    });
    const { fields: daysFields, append: appendDay, remove: removeDay } = useFieldArray({
        control,
        name: 'schedule.days',
    });
    const onSubmit = (data) => {

        // console.log(data)

        data.price = parseFloat(data.price);


        fetch("http://localhost:5000/addAndroid", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                console.log(result)
                if (result.acknowledged === true) {
                    Swal.fire(
                        'Good job!',
                        'Data Added SuccessFully',
                        'success'
                    )
                }
            });
        // console.log(data);
    };

    return (
        <div>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">

                        <div className="max-w-md mx-auto">

                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Create a Course</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Course Name</label>
                                        <input type="text"  {...register("courseName")} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Course Name" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Course Code</label>
                                        <input type="text"  {...register("courseCode")} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Course Code" />
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Start</label>
                                            <div className="relative  focus-within:text-gray-600 text-gray-400">
                                                <input type="date"   {...register("startDate")} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020" />

                                                <div className="absolute left-3 top-2">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">End</label>
                                            <div className="relative focus-within:text-gray-600 text-gray-400">
                                                <input type="date"  {...register("endDate")} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="26/02/2020" />
                                                <div className="absolute left-3 top-2">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Price</label>
                                            <div className="relative  focus-within:text-gray-600 text-gray-400">
                                                <input type="number"   {...register("price")} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Price" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Total Class</label>
                                            <div className="relative focus-within:text-gray-600 text-gray-400">
                                                <input type="number"  {...register("totalClasses")} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Total Class" />

                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Duration Weeks</label>
                                            <div className="relative focus-within:text-gray-600 text-gray-400">
                                                <input type="number"  {...register("totalDurationWeeks")} className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Total DurationWeeks" />

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-center gap-1 items-center'>
                                        <div>
                                            <h2>Days</h2>
                                            {daysFields.map((field, index) => (
                                                <div key={field.id}>
                                                    <Controller
                                                        name={`schedule.days[${index}]`}
                                                        control={control}
                                                        defaultValue={field.value || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input {...field} type="text" placeholder={`Day ${index + 1}`} />
                                                                <button type="button" onClick={() => removeDay(index)}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                </div>
                                            ))}
                                            <button
                                                type="button" className='btn btn-sm'
                                                onClick={() => appendDay('')}
                                            >
                                                Add Day
                                            </button>
                                        </div>

                                        <div>
                                            <h2>Time</h2>
                                            <Controller
                                                name="schedule.time"
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    <div>
                                                        <input {...field} type="text" placeholder="Time" />
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="leading-loose">Course Description</label>
                                        <input type="text"  {...register("description")} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional" />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="leading-loose">Learning Objectives</label>
                                        <ul>
                                            {learningObjectivesFields.map((field, index) => (
                                                <li key={field.id}>
                                                    <Controller
                                                        name={`learningObjectives[${index}]`}
                                                        control={control}
                                                        defaultValue={field.value || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...field} type="text" placeholder={`Prerequisite ${index + 1}`} />
                                                                <button type="button" onClick={() => removeLearningObjectives(index)}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <button className='btn btn-sm' type="button" onClick={() => appendLearningObjectives('')}>
                                            Add Learning Objectives
                                        </button>
                                    </div>

                                    <div className="">
                                        <label className="leading-loose">Textbooks</label>
                                        <ul>
                                            {textbooksFields.map((field, index) => (
                                                <li key={field.id}>
                                                    <Controller
                                                        name={`resources.textbooks[${index}]`}
                                                        control={control}
                                                        defaultValue={field.value || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input {...field} type="text" placeholder={`Textbook ${index + 1}`} />
                                                                <button type="button" onClick={() => removeTextbook(index)}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <button type="button" className='btn btn-sm' onClick={() => appendTextbook('')} >
                                            Add Textbook
                                        </button>
                                    </div>

                                    <div className=''>
                                        <label className='leading-loose'>Online Resources</label>
                                        <ul>
                                            {onlineResourcesFields.map((field, index) => (
                                                <li key={field.id}>
                                                    <Controller
                                                        name={`resources.onlineResources[${index}].title`}
                                                        control={control}
                                                        defaultValue={field.title || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...field} type="text" placeholder={`Resource Title ${index + 1}`} />
                                                            </div>
                                                        )}
                                                    />
                                                    <Controller
                                                        name={`resources.onlineResources[${index}].link`}
                                                        control={control}
                                                        defaultValue={field.link || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...field} type="text" placeholder={`Resource Link ${index + 1}`} />
                                                                <button type="button" onClick={() => removeOnlineResource(index)}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                </li>
                                            ))}
                                        </ul>

                                        <button type="button" className='btn btn-sm' onClick={() => appendOnlineResource({ title: '', link: '' })} >
                                            Add Online Resource
                                        </button>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="leading-loose">Prerequisites</label>
                                        <ul>
                                            {prerequisitesFields.map((field, index) => (
                                                <li key={field.id}>
                                                    <Controller
                                                        name={`prerequisites[${index}]`}
                                                        control={control}
                                                        defaultValue={field.value || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...field} type="text" placeholder={`Prerequisite ${index + 1}`} />
                                                                <button type="button" onClick={() => removePrerequisite(index)}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <button className='btn btn-sm' type="button" onClick={() => appendPrerequisite('')}>
                                            Add Prerequisite
                                        </button>
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="leading-loose">Topics Covered</label>
                                        <ul>
                                            {fields.map((field, index) => (
                                                <li key={field.id}>
                                                    <Controller
                                                        name={`topicsCovered[${index}]`}
                                                        control={control}
                                                        defaultValue={field.value || ''}
                                                        render={({ field }) => (
                                                            <div>
                                                                <input className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" {...field} type="text" placeholder={`Topic ${index + 1}`} />
                                                                <button type="button" onClick={() => remove(index)}>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <button className='btn btn-sm' type="button" onClick={() => append('')}>
                                            Add Topic
                                        </button>
                                    </div>

                                </div>

                                <div className="pt-4 flex items-center space-x-4">
                                    <input className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" type="submit" value="Create" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCourse