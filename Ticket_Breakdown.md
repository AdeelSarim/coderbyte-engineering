# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

The tickets will be divided into the following sub tickets:

## Migration for Database to allow custom IDs
    Description:
        In this ticket, we require the developer to change the Shift table such that it allows storing custom IDs.
    
    Acceptance Criteria:
        - Shift table can store custom IDs
        - Previously stored Databse IDs are changed with custom ID
        - Shift table have a column for custom ids.

    Time Estimate:
        - 3 points (Around 3 to 4 hours)

    Implementation Details:
        - Create a new column with String type which will be able to store custom Ids

## On creation of a Shift create a custom Id
    Description:
        In this ticket, we require the developer to create a custom Id for each Shift in which an Agent is working.
    
    Acceptance Criteria:
        - There should be a custom ID for each agent working on a shift.

    Time Estimate:
        - 3 points (Around 3 to 4 hours)

    Implementation Details:
        - Whenever a new Shift for a work is created, and an agent is added to the shift a custom ID should be created in the Shift table for that work.

## Use newly generated custom IDs to generate PDF reports
    Description:
        In this ticket, we require the developer to use the newly generated custom IDs in the Shift table to generate reports.
    
    Acceptance Criteria:
        - PDFs should be generated using the newly created custom IDs.

    Time Estimate:
        - 3 points (Around 3 to 4 hours)

    Implementation Details:
        - By creating a new custom ID we have provided with the option to generate PDFs using the custom IDs instead of calling Shifts.

