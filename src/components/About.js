import React, { useState } from 'react';

    return (
        <div className="flex flex-col w-full h-full" style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '35px' }}>
            <div className="flex h-60 card bg-[#F7F7F7]">
                <div className="grid flex-grow rounded-box place-items-left border border-transparent p-8">
                    <h1 className="text-[#55A3FF] text-xl font-semibold">About Me</h1>

                    <div className="flex items-center space-x-3">
                        <label className="w-44 h-8 btn bg-[#E7E7E7] flex justify-center items-center rounded-lg font-normal text-black cursor-pointer">
                            I am a sophomore honors student studying computer science at the University of Massachusetts Amherst.
                        </label>
                    </div>
                </div>

                <div className="rounded-box items-stretch text-[#55A3FF] p-4 absolute bottom-0 right-0">
                    <button className="w-44 h-8 btn bg-[#55A3FF]">Cool!</button>
                    // should probably make this do something fun, maybe a thumbs up emoji pops out or smth
                </div>
            </div>
        </div>
    );

export default About;