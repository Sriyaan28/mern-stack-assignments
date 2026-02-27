// Not empty and min 3 chars
function validateTitle(taskTitle)
{
    if(taskTitle.length>=3)
    {
        return true;
    }
    else
    {
        console.log("Title must be minimum of 3 characters")
        return false;
    }
}

// taskPriority must be low,medium or high
function validatePriority(taskPriority)
{
    if(taskPriority === 'low' || taskPriority === 'medium' || taskPriority === 'high')
    {
        return true;
    }
    else
    {
        console.log("Enter valid priority: low, medium or high")
        return false;  
    } 
}

// Due date must always be future dates
const now = new Date()
function validateDueDate(date)
{
    const dueDate = new Date(date); // yyyy-mm-dd
    if(dueDate>now)
    {
        return true;
    }
    else
    {
        console.log('Enter Valid date')
        return false;
    }
}

export {validateTitle,validatePriority,validateDueDate}
