export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h3>Assignment Name</h3>
            <input
                id="wd-name"
                type="text"
                defaultValue="A1 - ENV + HTML"
            />
            <br /><br />


            <textarea
                id="wd-description"
                rows={6}
                cols={60}
                defaultValue={
                    `The assignment is available online. Submit a link to the landing page 
of your Web application running on Netlify. The landing page should 
include:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories
• A link to navigate back to the landing page
`
                }
            />
            <br /><br />

            <table>
                <tbody>
                <tr>
                    <td align="right">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input
                            id="wd-points"
                            type="number"
                            defaultValue={100}
                        />
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                            <option value="In-Person">In-Person</option>
                        </select>
                        <br/><br/>
                        <strong>Online Entry Options</strong>
                        <div>
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry"> Text Entry</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url"> Website URL</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings"> Media Recordings</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation"> Student Annotation</label>
                        </div>
                        <div>
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload"> File Uploads</label>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <label htmlFor="wd-assign-to">Assign Assign to</label>
                    </td>
                    <td>
                        <input
                            id="wd-assign-to"
                            type="text"
                            defaultValue="Everyone"
                        />
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input
                            id="wd-due-date"
                            type="date"
                            defaultValue="2024-05-13"
                        />
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                        <input
                            id="wd-available-from"
                            type="date"
                            defaultValue="2024-05-06"
                        />
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                    <td>
                        <input
                            id="wd-available-until"
                            type="date"
                            defaultValue="2024-05-20"
                        />
                    </td>
                </tr>
                </tbody>
            </table>

            <br />
            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
