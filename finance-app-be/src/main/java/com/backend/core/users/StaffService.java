package com.backend.core.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
@Repository
public class StaffService {

    @Autowired
    private StaffRepo staffRepo;

    private int i = 0;

/*    public List<Staff> newStaff = new ArrayList<Staff>(Arrays.asList(
                    new Staff(1,"Rs 750","Bill 1", "string1",2),
                    new Staff(2,"Rs 578","Bill 2","string 2",3)
            ));
*/

    public List<Staff> getAllStaff(){

        List<Staff> staff = new ArrayList<>();
        staffRepo.findAll()
                .forEach(staff::add);

        return staff;
    }

    public Staff getStaff (int id){

        return staffRepo.findOne(id);
    }

    public void addStaff(Staff employee){
//        employee.setUserName(String.valueOf(i++));
        System.out.println(employee.getUserKey());
        staffRepo.save(employee);
//        if(employee.getUserKey() != null){
//            employee = em.merge(employee);
//        }
//        em.persist(employee);
    }

    public void updateStaff (int id , Staff employee){
        staffRepo.save(employee);
    }

    public void remveStaff (int id){
        staffRepo.delete(id);
    }

    public List<Staff> getByUserName (String userName){return staffRepo.findByUserName(userName);}

    public Staff getTopByOrderByUserKeyDesc(){
        return  staffRepo.findTopByOrderByUserKeyDesc();
    }

    public Staff getPasswordByUserName (String userName){
        return staffRepo.findPasswordByUserName(userName);
    }
}
