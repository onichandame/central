const path=require('path')
const okitchen=require('okitchen')

const tbls=[
{
  name:'TableSignup',
  cols:{
    email:{
      type:'text',
      notnull:true,
      unique:true
    },
    signup_at:{
      type:'int',
      notnull:true
    },
    salt:{
      type:'text',
      notnull:true
    },
    secret:{
      type:'text',
      unique:true,
      notnull:true
    }
  }
},{
  name:'TableUsers',
  cols:{
    uname:{
      type:'text',
      notnull:true,
      unique:true
    },
    email:{
      type:'text',
      notnull:true,
      unique:true
    },
    password:{
      type:'text'
    },
    salt:{
      type:'text',
      notnull:true
    },
    level:{
      type:'int',
      notnull:true,
      check:'level<3'//0:admin;1:app-admin;2:user
    },
    created_at:{
      type:'int',
      notnull:true
    },
    status:{
      type:'int',
      notnull:true,
      check:'status>=0 AND status<5'//0:active;1:suspecious;2:blocked;3:banned;4:permanently banned
    },
    banned_at:{
      type:'int'
    },
    recover_in:{
      type:'int'
    }
  }
},{
  name:'TableSession',
  cols:{
    user:{
      type:'int',
      notnull:true,
      foreign:'TableUsers(rowid)'
    },
    key:{
      type:'text',
      notnull:true,
      unique:true
    },
    salt:{
      type:'text',
      notnull:true
    },
    created_at:{
      type:'int',
      notnull:true
    },
    expires_in:{
      type:'int',
      notnull:true
    }
  }
},{
  name:'TableApps',
  cols:{
    maintainer:{
      type:'int',
      notnull:true,
      foreign:'TableUsers(rowid)'
    },
    name:{
      type:'text',
      notnull:true,
      unique:true
    },
    home:{
      type:'text',
      notnull:true,
      unique:true
    },
    redirect:{
      type:'text',
      notnull:true,
      unique:true
    },
    secret:{
      type:'text'
    },
    salt:{
      type:'text'
    },
    registered_at:{
      type:'int',
      notnull:true
    },
    approved_at:{
      type:'int'
    },
    approved_by:{
      type:'int',
      foreign:'TableUsers(rowid)'
    }
  }
}
]

/**
 * initiates files and databases
 * @function init
 * @returns {Promise} resolves with nothing on success. rejects with error on failure
 */
module.exports=function(){
  console.log(path.resolve(__dirname,'asset'))
  return okitchen.init({datadir:path.resolve(__dirname,'asset')})
}
