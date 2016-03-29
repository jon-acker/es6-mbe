import Allocation from 'planner/Allocation';

export default {

    allocate(resource, project) {
        return new Allocation(resource, project);
    }
}
